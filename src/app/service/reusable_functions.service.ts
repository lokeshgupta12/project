export class ReusableFunctionsService {

	// Convert Linear to Multi Level
	getNestedChildren(arr, primKey, ParKey, parent? : any) {
        var out = [];
        for(var i in arr) {
            if(arr[i][ParKey] == parent) {
                var children = this.getNestedChildren(arr, primKey, ParKey, arr[i][primKey]);
                children.length && (arr[i].children = children);
                out.push(arr[i])
            }
        }
        return out;
    }
    
    // Sort Array on behalf of field name
    sortArray(array : {}[], field : string, sortingType : string, fieldType ?: string) {
        var dir = 1;
        if (!array.length)
            return array;
        (sortingType == 'desc') && (dir = -1);
        switch (fieldType) {
            case "number":
                array.sort((a, b)=>{
                    return (a[field] - b[field])*dir;
                });
                break;
            case "date": {
                let x,y;
                array.sort((a,b)=>{
                    x = new Date(a[field]).getTime();
                    y = new Date(b[field]).getTime();
                    return ((x < y) ? -1 : ((y < x) ? 1 : 0)) * dir;
                })
                break;
            }
            default: {
                let x,y;
                array.sort((a,b)=>{
                    x = a[field].toLowerCase();
                    y = b[field].toLowerCase();
                    return ((x < y) ? -1 : ((y < x) ? 1 : 0)) * dir;
                })
                break;
            }
        }
        return array;
    }
}