export let URLGeoJson = "https://us-central1-noted-slice-401902.cloudfunctions.net/ryaas";
export let tableTag = "tr";
export let tableRowClass = "content is-small";
export let tableTemplate = `
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`