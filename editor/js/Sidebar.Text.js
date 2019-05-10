/**
 * @author edvilme/CTRL+ALT+TEC
 */
 
 Sidebar.Text = function(editor){
  var strings = editor.strings;

	var signals = editor.signals;

	var currentObject;
  
  var container = new UI.Panel();
  container.setBorderTop( '0' );
	container.setPaddingTop( '20px' );
  
	// Edit text
	container.add(new UI.Text('Text value'));
	var textRow = new UI.Row();
	var objectText = new UI.Input().setWidth( '100%' ).setFontSize( '24px' ).onChange( function(){
		editor.selected.geometry = new THREE.TextGeometry(objectText.getValue(), editor.selected.geometry.parameters.parameters)
		editor.execute( new AddObjectCommand( editor.selected ) );
	} );
	textRow.add(objectText)
	container.add(textRow)
	//
	 
	container.add(new UI.horizontalRule())
	 
	//
  var fontSizeRow = new UI.Row();
	var fontSizee = new UI.Number( editor.selected.geometry.parameters.parameters.size ).setWidth('calc(100% - 100px)').onChange( function(){
		editor.selected.geometry.parameters.parameters.size = fontSizee.getValue();
		editor.execute(new AddObjectCommand( editor.selected ))
	} )

	widthRow.add( new UI.Text( strings.getKey( 'sidebar/geometry/box_geometry/width' ) ).setWidth( '90px' ) );
  
  return container;
 }
