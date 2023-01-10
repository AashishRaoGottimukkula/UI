var CurDate = new Date();

let PSTDate = CurDate.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });
let PSTTime = CurDate.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });


let CSTDate = CurDate.toLocaleDateString('en-US', { timeZone: 'CST' });
let CSTTime = CurDate.toLocaleTimeString('en-US', { timeZone: 'CST' });

let ESTDate = CurDate.toLocaleDateString('en-US', { timeZone: 'EST' });
let ESTTime = CurDate.toLocaleTimeString('en-US', { timeZone: 'EST' });


let timeZones = `Current location Date : ${CurDate},
                 CST is : ${CSTDate}  ${CSTTime} Difference: 1 hour Ahead of MST, 
                 EST is : ${ESTDate}  ${ESTTime} Difference: 2 hour Ahead of MST, 
                 PST is : ${PSTDate}  ${PSTTime} Difference: MST is 1 hour Ahead of PST`

document.getElementById('MST').innerText = timeZones
