for(i = 1; i <= 10; i++) {
    document.write('<tr>');
    document.write('<td>' + numero + '</td>');
    document.write('<td>');
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const resultado = numero * multiplicador;
        document.write(numero + ' x ' + multiplicador + ' = ' + resultado + '<br>');
    }
    document.write('</td>');
    document.write('</tr>');
}
