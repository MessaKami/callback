const btnJob = document.getElementById("btn-job");

const candidat = {
  isProgrammer: false,
  isCool: true,
};

btnJob.addEventListener("click", applyToJob);

function applyToJob() {
  console.log("La désicion est en cours ...");
  startDesicionProcess()
    .then((result) => {
      console.log("result", result);
    })
    .catch((err) => {
      console.log("err", err);
    });
  console.log("Juste après startDesicionProcess");
  //   setTimeout(() => {
  //     console.log("Vous avez le job");
  //   }, 3000);
}

function startDesicionProcess() {
  return new Promise((resolve, reject) => {
    console.log("Recruteur - Pendant ce temps je reçois d'autres candidats");
    setTimeout(() => {
      if (candidat.isProgrammer && candidat.isCool) {
        console.log("avant le resolve");
        resolve("Recruteur - Bienvenue dans notre entreprise !");
      } else {
        console.log("avant reject");
        reject(
          "Recruteur - Malgré tout l'intêret de votre canditaure, nous sommes au regret ..."
        );
      }
    }, 2000);
  });
}

console.log("Après la function applyToJob");
