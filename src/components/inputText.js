import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { IoSendSharp } from 'react-icons/io5';
const TextAreaExampleMinHeight = () => (
  <Form>
    <div class="Icon-inside">
    <button class='send'>
    <IoSendSharp class='sendIcon'/>
    </button>
    <TextArea placeholder='' style={{ minHeight: 100, width: '40%' }} />
    </div>
    
  </Form>
)

export default TextAreaExampleMinHeight
