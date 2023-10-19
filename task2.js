const teams = {
    'Team A': 1,'Team B': 1,'Team C': 2,'Team D': 2,'Team E': 3,'Team F': 3
};
function clearTable() {
    document.getElementById('day1').textContent = '';
    document.getElementById('day2').textContent = '';
    document.getElementById('day3').textContent = '';
}
function addToSchedule() {
    const dateinput = document.getElementById('dateinput').value;
    const currentDate = new Date(dateinput);

    const teamselection = document.getElementById('teamselection').value;
    const selectedTeams = teamselection.split(',').map(team => team.trim());

    if (selectedTeams.length !== 2) {
        alert('Please enter exactly two teams separated by a comma.');
        return;
    }
   
    clearTable();
    
    if (
        (selectedTeams[0] === 'Team A' && selectedTeams[1] === 'Team B') ||
        (selectedTeams[0] === 'Team B' && selectedTeams[1] === 'Team A') ||
        (selectedTeams[0] === 'Team C' && selectedTeams[1] === 'Team D') ||
        (selectedTeams[0] === 'Team D' && selectedTeams[1] === 'Team C') ||
        (selectedTeams[0] === 'Team E' && selectedTeams[1] === 'Team F') ||
        (selectedTeams[0] === 'Team F' && selectedTeams[1] === 'Team E')
    ) {
        selectedTeams.forEach(team => {
            const cell = document.createElement('td');
            cell.textContent = team;
            const day = teams[team];
           switch (day) {
                
                case 1:
                    day1.appendChild(cell);
                    break;
                case 2:
                    day2.appendChild(cell);
                    break;
                case 3:
                    day3.appendChild(cell);
                    break;
            }
        });
    } 
    else {
        alert("Not Allocated");
    }
    currentDate.setDate(currentDate.getDate() + 1);
    document.getElementById('d1').textContent = `Day 1 - ${formatDate(currentDate)}`;
    currentDate.setDate(currentDate.getDate() + 1);
    document.getElementById('d2').textContent = `Day 2 - ${formatDate(currentDate)}`;
    currentDate.setDate(currentDate.getDate() + 1);
    document.getElementById('d3').textContent = `Day 3 - ${formatDate(currentDate)}`;
}
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}


