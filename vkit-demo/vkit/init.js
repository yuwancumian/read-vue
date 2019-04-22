let uid = 0;
export function init (Vkit) {
    Vkit.prototype._init = function() {
        const vm = this
        vm._uid = uid ++
        console.log('this',vm)
        console.log('inited!')
    }
}
