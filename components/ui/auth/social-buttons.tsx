import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import { Button } from '../button'

const SocialButtons = () => {
  return (
    <div className=" w-full flex justify-center items-center  gap-x-2 py-4">
      <Button variant={"outline"} className="w-full">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button variant={"outline"} className="w-full">
        <AiFillGithub className="h-5 w-5" />
      </Button>
    </div>
  );
}

export default SocialButtons