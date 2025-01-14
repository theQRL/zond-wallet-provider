import { Duplex, DuplexOptions } from 'readable-stream';
import { ObjectMultiplex } from './ObjectMultiplex';
export interface SubstreamOptions extends DuplexOptions {
    parent: ObjectMultiplex;
    name: string;
}
export declare class Substream extends Duplex {
    private readonly _parent;
    private readonly _name;
    constructor({ parent, name, ...streamOptions }: SubstreamOptions);
    /**
     * Explicitly sets read operations to a no-op.
     */
    _read(): void;
    /**
     * Called when data should be written to this writable stream.
     *
     * @param chunk - Arbitrary object to write
     * @param encoding - Encoding to use when writing payload
     * @param callback - Called when writing is complete or an error occurs
     */
    _write(chunk: unknown, _encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
}
