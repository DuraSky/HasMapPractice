class hashMap{
    constructor(size = 16){
        this.bucket = new Array(size).fill().map(() => []);
        this.size = size;
        this.loadFactor = 0.75;
    }

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber *  key.charCodeAt(i);
          hashCode = hashCode % this.size;
        }
      
        return hashCode;
    }

    index(hash){
        if (hash < 0 || hash >= this.size) {
            throw new Error("Trying to access index out of bound");
          }else{
            return hash;
          }
    }

    set(key, value){
        let index = this.index(this.hash(key));
        
        this.bucket[index].push(key, value);
    }

}

const newMap = new hashMap();
console.log(newMap);
newMap.set("Lukas", 26)
newMap.set("Katerina", 25)
