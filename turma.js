window.revelar = ScrollReveal({ reset: true });

   revelar.reveal('.efeito-titulo', {
       duration: 2000,
       distance: '90px',
       origin: 'top'
   });

   revelar.reveal('.efeito-imagem', {
       duration: 2000,
       distance: '90px',
       origin: 'bottom',
       delay: 300
   });

   revelar.reveal('.efeito-aluno', {
       duration: 1500,
       distance: '70px',
       origin: 'left',
       interval: 200
   });