// В примере ниже вызов table.remove() удаляет таблицу из документа.

// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.

// Почему так происходит?

// <table id="table">
//   aaa
//   <tr>
//     <td>Тест</td>
//   </tr>
// </table>

// <script>
//   alert(table); // таблица, как и должно быть

//   table.remove();
//   // почему в документе остался текст "ааа"? // Потому что  Браузер исправил ошибку автоматически внутри <table> не может быть текста
// </script>