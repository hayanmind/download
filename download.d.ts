// Type definitions for download 8.0
// Project: https://github.com/kevva/download
// Definitions by: Nico Jansen <https://github.com/nicojs>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { GotOptions } from "got";

declare namespace download {
    interface DownloadOptions extends GotOptions<string | null> {
        /**
         * Name of the saved file.
         */
        filename?: string | undefined;
    }
}

/**
 * Download and extract files.
 *
 * @param url URL to download.
 * @param destination Path to where your file will be written.
 * @param options Same options as [`got`](https://github.com/sindresorhus/got#options)
 * in addition to the ones from this package.
 *
 * @example
 * import fs from 'fs';
 * import download = require('download');
 *
 * (async () => {
 *     await download('http://unicorn.com/foo.jpg', 'dist');
 *
 *     fs.writeFileSync('dist/foo.jpg', await download('http://unicorn.com/foo.jpg'));
 *
 *     download('unicorn.com/foo.jpg').pipe(fs.createWriteStream('dist/foo.jpg'));
 *
 *     await Promise.all([
 *         'unicorn.com/foo.jpg',
 *         'cats.com/dancing.gif'
 *     ].map(url => download(url, 'dist')));
 * })();
 */
declare function download(
    url: string,
    destination?: string,
    options?: download.DownloadOptions,
): Promise<[Buffer, string]>;
declare function download(url: string, options?: download.DownloadOptions): Promise<[Buffer, string]>;

export = download;
