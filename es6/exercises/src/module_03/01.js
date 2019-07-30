const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function onePerSecond() {  
//     delay().then(() => {
//         console.log('1s');
            
//         delay().then(() => {
//             console.log('2s');
                    
//             delay().then(() => {console.log('3s');});
//         })
//     });
// }
    
onePerSecond();

export default async function onePerSecond() {
    await delay();
    console.log('1s')
    await delay();
    console.log('2s')
    await delay();
    console.log('3s')
}