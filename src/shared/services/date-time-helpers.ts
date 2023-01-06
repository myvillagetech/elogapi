
export interface Param {
    unit: 'H' | 'D' | 'W' | 'M' | 'Y' | 'A',
    quantity: number
}


export class getMilliSecondsbyParam {
    constructor(param: Param) {
        switch (param.unit) {
            case ('H'):
                return param.quantity * 60 * 60;
            case ('D'):
                return param.quantity * 24 * 60 * 60;
            case ('W'):
                return param.quantity * 7 * 24 * 60 * 60;
            case ('M'):
                return param.quantity * 31 * 24 * 60 * 60;
            case ('Y'):
                return param.quantity * 12 * 31 * 24 * 60 * 60;
            default:
                return 0;
        }
    }

}