<?php
$sqlq = "SELECT * FROM benutzer";
$db_erg = mysqli_query($db_link, $sqlq);
if (! $db_erg)
{
 print 'Ungültige Abfrage: ' . mysqli_error();
}
echo '<table border="1">';
while ($zeile = mysqli_fetch_array($db_erg, MYSQLI_ASSOC))
{
 echo "<tr>";
 echo "<td>". $zeile['id'] . "</td>";
 echo "<td>". $zeile['nachname'] . "</td>";
 echo "<td>". $zeile['vorname'] . "</td>";
 echo "</tr>";
}
echo "</table>";
mysqli_free_result( $db_erg );
?>