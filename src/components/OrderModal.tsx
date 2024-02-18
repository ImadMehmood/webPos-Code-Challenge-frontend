import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const OrderModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit, setValue, watch , control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); 
  };

  const deliveryChannel = watch("deliveryChannel");
  console.log(deliveryChannel)

  return (
    <>
      <Button onPress={onOpen} className="bg-webGreen float-right text-white">
        Place Order
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Order Details
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  {...register("customerName")}
                  label="Customer Name"
                  placeholder="Enter Customer Name"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  {...register("firstName")}
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="bordered"
                />
                <Input
                  {...register("lastName")}
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="bordered"
                />
                {/* <Input
                  {...register("deliveryChannel")}
                  label="Delivery Channel"
                  placeholder="Enter your Delivery Channel"
                  variant="bordered"
                /> */}
         <Controller
                name="deliveryChannel"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <RadioGroup
                    label="Select your Delivery Channel"
                    orientation="horizontal"
                    {...field}
                  >
                    <Radio value="sms">SMS</Radio>
                    <Radio value="email">Email</Radio>
                    <Radio value="api">API</Radio>
                  </RadioGroup>
                )}
              />
              {deliveryChannel === "email" && (
                <Input
                  {...register("emailAddress")}
                  label="Email Address"
                  placeholder="Enter your Email Address"
                  variant="bordered"
                />
              )}
              {deliveryChannel === "sms" && (
                <Input
                  {...register("smsMobileNumber")}
                  label="SMS Mobile Number"
                  placeholder="Enter your SMS Mobile Number"
                  variant="bordered"
                />
              )}
                <Input
                  {...register("countryCode")}
                  label="Country Code"
                  placeholder="Enter your Country Code"
                  variant="bordered"
                />
                <Input
                  {...register("languageCode")}
                  label="Language Code"
                  placeholder="Enter your Language Code"
                  variant="bordered"
                />
                <Input
                  {...register("orderDate")}
                  label="Order Date"
                  type="Date"
                  placeholder="Enter your Order Date"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Submit Order
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderModal;
