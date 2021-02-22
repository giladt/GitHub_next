import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalFooter
} from '@chakra-ui/react'

export const SignUp = ( { onClose, isOpen } ) => {
  return (
    <Modal onClose={ onClose } size="lg" isOpen={ isOpen }>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Some string</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={ onClose }>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SignUp