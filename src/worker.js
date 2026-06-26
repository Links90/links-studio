import { App } from 'astro/app';
import { handle } from '@astrojs/cloudflare/handler';

const mountPath = process.env.BASE_URL || '/studio';
const mountedAssetPattern = new RegExp(`^${mountPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/(?:assets|_astro)/`);

const stripMountPath = (request) => {
  const url = new URL(request.url);

  if (url.pathname.startsWith(`${mountPath}/`)) {
    url.pathname = url.pathname.slice(mountPath.length);
  }

  return new Request(url, request);
};

export function createExports(manifest) {
  const app = new App(manifest);

  return {
    default: {
      fetch(request, env, context) {
        const url = new URL(request.url);

        if (mountedAssetPattern.test(url.pathname)) {
          return env.ASSETS.fetch(stripMountPath(request));
        }

        return handle(manifest, app, request, env, context);
      }
    }
  };
}
