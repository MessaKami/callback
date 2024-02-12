const btnJob = document.getElementById('btn-job');

btnJob.addEventListener('click', applyToJob);

function applyToJob() {
    console.log('La désicion est en cours ...');
    setTimeout(() => {
        console.log('Vous avez le job');
    },3000);
    console.log('Recruteur - Pendant ce temps je reçois d\'autres candidats');
}

console.log('Après la function applyToJob')