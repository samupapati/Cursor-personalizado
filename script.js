let quadro = document.getElementsByClassName('quadro');
let cursor = document.getElementsByClassName('cursor');

let quadros = Array.from(quadro);
let cursores = Array.from(cursor);

quadros.forEach((quadro) => {
    quadro.addEventListener('mousemove', (e) => {
        let alturaQuadro = quadro.clientHeight - 20;
        let larguraQuadro = quadro.clientWidth - 20;
        let posYcursor = e.layerY;
        let posXcursor = e.layerX;

        cursores.forEach((cursor) => {
            if(posYcursor >= 0 && posYcursor <= alturaQuadro &&
               posXcursor >= 0 && posXcursor <= larguraQuadro ){
                cursor.style.transform = `translate3d(${posXcursor}px, ${posYcursor}px, 0)`
            }
        })
    });
})