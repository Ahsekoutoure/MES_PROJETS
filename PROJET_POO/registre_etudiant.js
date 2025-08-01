                class Etudiant {
                    constructor(matricule,nom, telephone, email) {
                        
                        this.matricule=matricule
                        this.nom = nom;
                        this.telephone = telephone;
                        this.email = email;
                        }

                    afficherHTML(index) {
                        return `
                         <div class="etudiant">
                            <strong>Matricule :</strong> ${this.matricule} <br>
                            <strong>Nom :</strong> ${this.nom} <br>
                            <strong>Téléphone :</strong> ${this.telephone} <br>
                            <strong>Email :</strong> ${this.email} <br>
                            <button onclick="registre.supprimer(${index})" class="btn">Supprimer</button>
                         </div>`;
                        }
                        }

                class RegistreEtudiant {
                    constructor() {
                         this.etudiants = [];
                        }

                    ajouter(etudiant) {
                        this.etudiants.push(etudiant);
                        this.afficherTous();
                     }

                    supprimer(index) {
                        this.etudiants.splice(index, 1);
                        this.afficherTous();
                            }

                    afficherTous() {
                        const listeEtud = document.getElementById("listeEtudiants");
                        listeEtud.innerHTML = "";

                        this.etudiants.forEach((etudiant, index) => {
                         listeEtud.innerHTML += etudiant.afficherHTML(index);
                        });
                }
                }
                            
                const registre = new RegistreEtudiant(); 
                             
                let formEtud=document.getElementById("formEtud")
                    formEtud.addEventListener("submit", function(event) { 
                     event.preventDefault(); 
                                
                        const matricule = document.getElementById("matricule").value;
                        const nom = document.getElementById("nom").value; 
                        const telephone = document.getElementById("telephone").value; 
                        const email = document.getElementById("email").value; 
                        const nouveauEtudiant = new Etudiant(matricule, nom, telephone, email); 
                        registre.ajouter(nouveauEtudiant); 
                        
                        this.reset(); 
                     });