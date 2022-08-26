module.exports = {
    USER_ID: "6310500456",
    MIN_LDR_VALUE: 0,
    MAX_LDR_VALUE: 2500,

    setLDRLimit: function(value){
        return value > this.MAX_LDR_VALUE ? this.MAX_LDR_VALUE : value
    }
}