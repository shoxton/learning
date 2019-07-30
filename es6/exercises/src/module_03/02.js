import axios from 'axios';
// function getUserFromGithub(user) {  
//     axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {      
//         console.log(response.data);    
//     })    
//     .catch(err => {      
//         console.log('User does not exist.');    
//     })
// };

export async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err){
        console.log(`User ${user} does not exist.`);
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

/////////////////////////

// class Github {  
//     static getRepositories(repo) {    
//         axios.get(`https://api.github.com/repos/${repo}`)      
//         .then(response => {        
//             console.log(response.data);      
//         })      
//         .catch(err => {       
//              console.log('Repository does not exist.');
//         })  
//     }
// };

export class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch {
            console.log(`Repository ${repo} does not exist.`);
        }
    }
}

Github.getRepositories('shoxton');
Github.getRepositories('rocketseat/dslkvmskv')

/////////////////////////

// const fetchUser = user => {  
//     axios.get(`https://api.github.com/users/${user}`)    
//     .then(response => {      
//         console.log(response.data);    
//     })    
//     .catch(err => {     
//         console.log('User does not exist.');    
//     });
// }

export const fetchUser = async user => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log(`User ${user} does not exist.`);    
    }
}
    
fetchUser('diego3g');