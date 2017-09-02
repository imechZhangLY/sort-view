export class Sort {
    i: number;
    index1: number;
    index2: number;
    index3: number;
    arr: number[];

    constructor(private __i__: number, private __j__: number, private __max__: number, private __arr__: number[]) {
        this.i = __i__;
        this.index1 = __j__;
        this.index2 = __max__;
        this.arr = __arr__;
        this.index3 = this.index1;

    }

    exchange(index1: number, index2: number): void{
        let temp: number;
        temp = this.arr[index1];
        this.arr[index1] = this.arr[index2];
        this.arr[index2] = temp;
    }

    bubbleSort(): void {
        if(this.i < this.arr.length - 1){
            if(this.index1 < this.arr.length - this.i){
                if(this.arr[this.index1 - 1] > this.arr[this.index1]){
                    this.exchange(this.index1,this.index1-1);
                }
                this.index1 = this.index1 + 1;
                this.index2 = this.index1 - 1;
            }else{
                this.index1 = 1;
                this.index2 = this.index1 - 1;
                this.i = this.i + 1;
            }
        }
    }

    selectSort(): void {
        if(this.i < this.arr.length - 1){
            if(this.index1 < this.arr.length - this.i){
                if(this.arr[this.index1] > this.arr[this.index2]){
                    this.index2 = this.index1;
                }
                this.index1 = this.index1 + 1;
            }else{
                this.exchange(this.arr.length-this.i-1,this.index2)
                this.index1 = 1;
                this.index2 = 0;
                this.i = this.i + 1;
            }
        }
    }

    insertSort(): void {
        let m: number;
        if(this.i < this.arr.length - 1){ 
            m = this.arr[this.index3];
            if(m < this.arr[this.index2] && this.index2 >= 0){
                this.arr[this.index2 + 1] = this.arr[this.index2];
                this.arr[this.index2] = m;
                this.index3 = this.index2;
                this.index2--;
            }else{
                this.i++;
                this.index1++;
                this.index3 = this.i + 1;
                this.index2 = this.index1 - 1;
            }
        }
    }

    quickSort(): void {
        let key: number;
        if(this.index1 !== this.index2){
            key = this.arr[this.index2];
            if(this.arr[this.index1] < key){
                this.arr[this.index2] = this.arr[this.index1]
                this.arr[this.index1] = key;
                
            }else{
                this.index1--;
            }
        }
    }
}