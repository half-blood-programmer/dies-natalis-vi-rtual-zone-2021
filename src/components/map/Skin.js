
import "firebase/database";
import db from './config';

var docRefSetSkin = db.collection("content").doc("skin");
var setSkin

    docRefSetSkin.get().then(documentSnapshot => {
        if (documentSnapshot.exists) {
            setSkin = ""+documentSnapshot.data().setSkin+"";
            console.log(setSkin);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
if(setSkin == 1){
    var skinsss = "did-kun.png";
}
if(setSkin == 2){
    var skinsss = "f1.png";
}


export function changeSkin(skin){
    skinsss = "did-kun.png";
    return skinsss
}
        
export default skinsss;