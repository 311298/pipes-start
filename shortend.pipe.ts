import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'shortend' })
export class ShortendPipe implements PipeTransform {

    transform(value: any, limit: number, ...args: any[]) {
        if (value.length > limit) {
            return value.substr(0, limit) + '...'
        }
        return value
    }
}