class hashMap{
    constructor(size = 16){
        this.bucket = new Array(size).fill().map(() => new linkedList());
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

    checkLoad(){
      let checkEmpty = 0;

      for(let i=0; i <= this.bucket.length -1; i++){
       if(this.bucket[i].length ===0){
          checkEmpty++;
      }
          //(size - checkempty) / size
      }
      let loadCalc = (this.size - checkEmpty)/this.size;
      let loadCalcRemaining = this.loadFactor - loadCalc;

      if(loadCalcRemaining <= 0){
        const newSize = this.size * 2;
        const newBucket = new Array(newSize).fill().map(() => new linkedList());

        this.bucket.forEach(linkedList => {
          let current = linkedList.head;
            while (current !== null) {
              const newIndex = this.index(this.hash(current.key));
              const newNode = new linkedListNode(current.key, current.value)
              newBucket[newIndex].append(newNode);
              current = current.next;
            }
          });

        this.bucket =  newBucket;
        this.size = newSize;
         
        }
      }

    checkDuplicate(key,value, index){
      let checkThisBucket = this.bucket[index];
      
      if(checkThisBucket.head ===null){
        return false;
      }else{
        let current = checkThisBucket.head;
        while(current){
          if(current.key === key){
            current.value = value;
            return true;
            }
          current = current.next;
          }
        }
      }

    set(key, value){
        let index = this.index(this.hash(key));
        console.log(`index`+index);
        if(this.checkDuplicate(key, value, index) === true){
          return;
        }else{
        this.checkLoad();
        const newNode = new linkedListNode(key, value);
        this.bucket[index].append(newNode);
      }

        
    }

    get(key){
      let foundValue = null;

      this.bucket.forEach(linkedList => {
        let current = linkedList.head;
          while (current !== null) {
            if(current.key === key){
              console.log("FOUND IT");
              foundValue = current.value;
              break;
            }
            current = current.next;
          }
        });
        return console.log(foundValue);
    }

    has(key){
      let foundValue = false;

      this.bucket.forEach(linkedList => {
        let current = linkedList.head;
          while (current !== null) {
            if(current.key === key){
              console.log("FOUND IT");
              foundValue = true;
              break;
            }
            current = current.next;
          }
        });

      return console.log(foundValue);
    }

}

class linkedList{
  constructor(){
    this.head = null;
    this.length = 0;
  }

  append(node){
    if (!this.head) {
        this.head = node;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
    console.log(newMap)
}
}

class linkedListNode{
  constructor(key,value, next = null){
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

const newMap = new hashMap();
console.log(newMap);
newMap.set("Lukas", 26);
newMap.set("Katerina", 25);
newMap.set("Dumbo", 45);
newMap.set("Fulmar", 22);
newMap.set("Nodar", 12);
newMap.set("Tomas", 30);
newMap.set("Adam",44);
newMap.set("Jakub",85);
newMap.set("Jarda",43);
newMap.set("Johny",67);
newMap.set("dfghdfg",34);
newMap.set("hjkhjkhj",55);
newMap.set("ghjkty",55);
newMap.set("ert",33);
newMap.set("gg",44);
newMap.set("loip",48);
newMap.set("uiouio",77);

//duplicate entry to check if values are being overwritten
newMap.set("loip",444);

//returns value associated with a key, null if not found
newMap.get("loip");
newMap.get("loipsssssss");

//returns true/false based on whether or not the key is in the hashmap
newMap.has("Lukas");
newMap.has("Lukasss");

//Uncomment to see bucket expand
//  newMap.set("bnmu",87);
//  newMap.set("uio",12);
//  newMap.set("nghj",33);
//  newMap.set("xcvyy",21);
//  newMap.set("ert",66);
//  newMap.set("hjkhjk",66);
//  newMap.set("rtyrty",88);
//  newMap.set("vbnvbc",11);
//  newMap.set("frer",44);
//  newMap.set("dfgvcbn",22);
//  newMap.set("Lukas", 46);


