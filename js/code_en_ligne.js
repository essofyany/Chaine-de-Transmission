// lable generator( X axis)
function labelCode(labelName) {
    const codeName = [];
    if(labelName === 'nrzLabel'){
        for(let i = 0; i <= 30; i++) {
            i === 0 ? codeName.push(0) : codeName.push(i);
        }
        return codeName
    } else if (labelName === 'biphaseLabel') {
        for(let i = 0; i <= 30; i++) {
            codeName.push(i, i+0.5);
        }
        return codeName
    } else if (labelName === 'bipolairLabel') {
        for(let i = 0; i <= 30; i++) {
            i === 0 ? codeName.push(0) : codeName.push(i);
        }
        return codeName
    } else if(labelName === 'binarySequanceLabel') {
        for(let i = 0; i <= 30; i++) {
            i === 0 ? codeName.push(0) : codeName.push(i);
        }
        return codeName
    }
}

// binary sequence 
const binarySequence = [];
for(let i = 0; i <= 30; i++) {
     i === 0 ? binarySequence.push(1)
     : i%2 === 0 ? binarySequence.push(1) 
     : binarySequence.push(0);
    }
    binarySequence.sort( ()=> Math.random() - 0.5 );

// code NRZ 
const nrzCode = [];
for(let i = 0; i <= 30; i++) {
    binarySequence[i] === 0 ? nrzCode.push(-1) : nrzCode.push(1);
}
// code Manchester
const biphaserCode = [];
for(let i = 0; i <= 30; i++) {
    binarySequence[i] === 0 ? biphaserCode.push(-1,1) : biphaserCode.push(1,-1); 
}

// code Bipolaire HDB3
const bipolairCode = [];
for(let i = 0; i <= 30; i++) {
    bipolairCode.push(0);
}
let polarisation = 1;
for(let i = 0; i <= 30; i++) {
    if( binarySequence[i] === 0) {
        bipolairCode[i] = 0;
    } else if(binarySequence[i] === 1 && polarisation === 1 ) {
        bipolairCode[i] = 1;
        polarisation = -1;
    } else if(binarySequence[i] === 1 && polarisation === -1 ) {
        bipolairCode[i] = -1;
        polarisation = 1;
    }
}
