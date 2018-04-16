var quotes = [
        {
                quote: "Les conneries c'est comme les impôts, on finit toujours par les payer.",
                name:"Michel Audiard"
        },
        {
                quote:"La statistique est la première des sciences inexactes.",
                name:"Edmond et Jules de Goncourt"
        },
        {
                quote:"La curiosité mène à tout : parfois à écouter aux portes, parfois à découvrir l'Amérique.",
                name:"J. M. Eca de Queiros"
        },
        {
                quote:"Le chien a son sourire dans sa queue.",
                name:"Victor Hugo"
        },
        {
                quote:"Je travaille à être heureux : c'est le plus beau des métiers.",
                name:"Roland de Lassus"
        },
        {
                quote:"Verser de l'eau dans du cognac, c'est gâcher deux bonnes choses.",
                name:"Charles Lamb"
        },
        {
                quote:"Quand on voit ce qu'on voit et que l'on entend ce qu'on entend, on a bien raison de penser ce qu'on pense.",
                name:"Guy Bedos"
        },
        {
                quote:"Les absents ont toujours tort de revenir.",
                name:"Jules Renard"
        },
        {
                quote:"L'amour... il y a ceux qui en parlent et il y a ceux qui le font. A partir de quoi il m'apparaît urgent de me taire.",
                name:"Pierre Desproges"
        },
        {
                quote:"L'habitude nous réconcilie avec tout.",
                name:"Edmund Burke"
        },
        {
                quote:"Un secret consiste à ne le répéter qu'à une seule personne à la fois.",
                name:"Michel Audiard"
        },
        {
                quote:"Le temps porte conseil : en général celui de ne rien faire.",
                name:"Claude Roy"
        },
        {
                quote:"La vérité n'est jamais amusante sinon tout le monde la dirait.",
                name:"Michel Audiard"
        },
        {
                quote:"L'ennui avec la ponctualité, c'est que personne n'est jamais là pour l'apprécier.",
                name:"Harold Rome"
        },
        {
                quote:"Il importe peu de descendre du singe ; l'essentiel est de ne pas y remonter.",
                name:"Richard Wagner"
        },
        {
                quote:"Une fortune est plus à l'abri dans une tête que dans un sac.",
                name:"Félix Leclerc"
        },
        {
                quote:"Aujourd'hui, j'ai permis au soleil de se lever plus tôt que moi.",
                name:"Georg Christoph Lichtenberg"
        },
        {
                quote:"On n'a jamais autant besoin de vacances que lorsqu'on en revient.",
                name:"Ann Landers"
        },
        {
                quote:"La seule façon d'être suivi, c'est de courir plus vite que les autres.",
                name:"Francis Picabia"
        },
        {
                quote:"Ne rien faire n'est vraiment agréable que si l'on a beaucoup de travail en retard.",
                name:"Jerome K. Jerome"
        },
        {
                quote:"Il est bien plus beau de savoir quelque chose de tout que de savoir tout d'une chose.",
                name:"Blaise Pascal"
        },
        {
                quote:"Ne rien risquer est un risque encore plus grand !",
                name:"Erica Jong"
        },
        {
                quote: "Si l'important n'est pas de gagner, pourquoi compte-t-on les points ?",
                name:"Vince Lombardi"
        },
        {
                quote:"Le meilleur moyen de s'endormir est de s'imaginer qu'il est l'heure de se lever.",
                name:"Groucho Marx"
        },
        {
                quote:"Les idées reçues sont des maladies contagieuses.",
                name:"Esther Rochon"
        },
        {
                quote:"Un homme est heureux tant qu'il décide de l'être, et nul ne peut l'en empêcher.",
                name:"Alexandre Soljenitsyne"
        },
        {
                quote:"Une journée nuageuse ne peut rien contre un tempérament radieux.",
                name:"William Arthur Ward"
        },
        {
                quote:"Il y a tellement de choses qu'on voudrait avoir faites hier et si peu qu'on a envie de faire aujourd'hui.",
                name:"Mignon MacLaughlin"
        },
        {
                quote:"Les singes sont bien trop bons pour que l'homme puisse descendre d'eux.",
                name:"Friedrich Nietzsche"
        },
        {
                quote:"Ne pas se faire de bien, c'est une manière de se faire du mal.",
                name:"Lisa Carducci"
        },
        {
                quote:"Ce ne sont pas les heures qui sont précieuses, ce sont les minutes.",
                name:"Bernard Shaw"
        },
        {
                quote:"Les grandes choses peuvent se manifester par de petits signes.",
                name:"Sigmund Freud"
        },
        {
                quote:"On peut toujours plus que ce que l'on croit pouvoir.",
                name:"Joseph Kessel"
        },
        {
                quote:"Les déceptions ne tuent pas et les espérances font vivre.",
                name:"George Sand"
        },
        {
                quote:"Pour la plupart des hommes, se corriger consiste à changer de défauts.",
                name:"Voltaire"
        },
        {
                quote:"Qu'appelle-t-on sens commun ? Le sens que chacun de nous pense avoir tout seul.",
                name:"Alfred Bougeard"
        },
        {
                quote:"On n'arrête pas le progrès dit-on. La bêtise non plus.",
                name:"Yves Courrière"
        },
        {
                quote:"Il est souvent plus facile de commencer quelque chose que d'y mettre fin.",
                name:"Agnes Allen"
        },
        {
                quote:"Si deux hommes sont d'accord sur tout, c'est qu'un seul des deux pense.",
                name:"Lyndon B. Johnson"
        },
        {
                quote:"Entreprenez l'impossible, l'impossible fera le reste.",
                name:"François Caries"
        },
        {
                quote:"Quand on aime quelqu'un, c'est effrayant comme on pense peu aux autres...",
                name:"Marcel Pagnol"
        },
        {
                quote:"Quand un homme ne parle que de ce qu'il sait, il a toujours l'air plus savant que nous.",
                name:"Jules Renard"
        },
        {
                quote:"Toutes choses sont dites déjà ; mais comme personne n'écoute, il faut toujours recommencer.",
                name:"André Gide"
        },
        {
                quote:"Une erreur ne devient une faute que lorsqu'on ne veut pas en démordre.",
                name:"Ernst Jünger"
        },
        {
                quote:"Ce qu'on ne voit pas, on peut l'ignorer.",
                name:"Graham Greene"
        },
        {
                quote:"Rien ne sert de courir, il suffit d'arriver.",
                name:"Henri Dreysse"
        }
];
var number = quotes.length;
var randomNumber = Math.floor(Math.random() * number);
var text = quotes[randomNumber].quote;
var text2 = quotes[randomNumber].name;
$("#quote").html(text + " (" + text2 + ")");