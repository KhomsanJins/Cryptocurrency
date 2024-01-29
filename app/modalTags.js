'use client'

import React from "react";
import {
    Link,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/react";

export default function ModalTags() {
    // modal tags start
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    // modal tags end

    return (
        <>
            <Button size="sm" onPress={onOpen} className="font-medium bg-transparent focus:bg-transparent hover:bg-transparent text-[#3861fb] hover:text-[#5b79e3]">Show all</Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-black">Bitcoin tags</ModalHeader>
                            <ModalBody>
                                <div>
                                    <div className="text-[12px] font-normal text-[#616E85] flex items-center">
                                        Algorithm
                                    </div>

                                    <div className="flex flex-wrap gap-[8px] mt-[5px]">
                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-[10px]">
                                    <div className="text-[12px] font-normal text-[#616E85] flex items-center">
                                        Category
                                    </div>

                                    <div className="flex flex-wrap gap-[8px] mt-[5px]">
                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>



                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">PoW</span>
                                        </Link>

                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">SHA-256</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-[10px]">
                                    <div className="text-[12px] font-normal text-[#616E85] flex items-center">
                                        Others
                                    </div>

                                    <div className="flex flex-wrap gap-[8px] mt-[5px]">
                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Mineable</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-[10px]">
                                    <div className="text-[12px] font-normal text-[#616E85] flex items-center">
                                        Platform
                                    </div>

                                    <div className="flex flex-wrap gap-[8px] mt-[5px]">
                                        <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                                            <span className="">Bitcoin Ecosystem</span>
                                        </Link>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter></ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}