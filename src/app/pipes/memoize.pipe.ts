import {ChangeDetectorRef, EmbeddedViewRef, Pipe, PipeTransform, Type} from '@angular/core';

/**
 * @Author Ayoub LAHKIM
 */

@Pipe({
    name: 'memoize'
})
export class MemoizePipe implements PipeTransform {

    context: any;

    constructor(cdRef: ChangeDetectorRef) {
        this.context = (cdRef as EmbeddedViewRef<Type<any>>).context;
    }

    transform(fn: Function, ...args: any[]): any {

        if (fn == null)
            throw new Error('Piped function is false!');

        return fn.call(this.context, ...args);
    }
}
