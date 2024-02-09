function twoSome(arr, target){

    const arrMap = new Map();
    for (let index = 0; index < arr.length; index++) {
        const element =arr[index];
        if(arrMap.has(target - element)){
            return [index, arrMap.get(target - element)];
        }else{

            arrMap.set(element, index)
        }
    }
    return [];
}