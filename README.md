# Medication Control
Create an application to control medication stock.

Requirements:

- Must be possible to create/update/delete a item of medication (e.g. AAS)

- The medication must have, at least, this fields: Name, Measurement unit, Orientation

- Must be possible to add/remove from stock a quantity of medication


#### 2.2 Medication control componentization

Make parts of the application componentized:

- Create a component, that create a form, based in an object with the metadata info. 

  - e.g.: [{type: 'TXT', model: 'name', label: 'Nome'},{type: 'TXT', model: 'mesurement_unit', label: 'Unidade de medida'}]

- Create a component, that renders a grid to display the medications

- Remenber to create a component to select the mesurement unit.

- After, organize the medication control in dbpanel format.
