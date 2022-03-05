/// <reference path="../swig/index.d.ts" />

declare namespace KoaSwig {
  type CacheType =  "memory" | boolean | Record<string, any>;

  interface KosSwigOptions extends SwigOptions {
    root?: string;
    cache?:CacheType;
    ext?: string;
    writeBody?: boolean;
  }

  function render(view?: string, options?: Record<string, any>): Generator<string>;

  export function renderer(settings?: KosSwigOptions): typeof render;
}

export declare const swig: Swig;
