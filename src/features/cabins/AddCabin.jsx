import { useState } from "react";

import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
          <CreateCabinForm
            onCloseModal={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
