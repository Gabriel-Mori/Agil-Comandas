import Image from "next/image";
import Input from "../Input";
import { PiEyeLight } from 'react-icons/pi';
import Button from "../Button";

const Login = () => {


  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex bg-[#fff] w-[640px] h-[688px] rounded-[50px] border-[1px] shadow-shadow">
        <div className="flex flex-col w-full pt-[52px] pl-20">
          <Image
            className=""
            src="login.svg"
            alt="Next.js Logo"
            width={300}
            height={100}
          />
          <div className="flex flex-col mt-7  ">
            <h3 className="text-primary text-3xl font-bold">Olá</h3>
            <p className="mt-4 text-primary">Não tem uma conta? <a href="#" className="cursor-pointer"><span className="text-links">Inscrever-se</span></a></p>
          </div>



          <Input
            label="E-mail"
            placeholder="exemploseuemail@aqui.com"
            htmlFor="email"
            className="mb-8 mt-9 w-input"
            value={''}
            onChange={(e) => e} />


          <Input
            label="Senha"
            placeholder="Digite a sua senha"
            htmlFor="password"
            className="mb-4 w-input"
            icon={<PiEyeLight size={24} />}
            value={''}
            onChange={(e) => e} />

          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4" />
            <label className="text-primary text-sm ml-2">Manter conectado</label>

            <a href="#" className="cursor-pointer ml-[170px]"><span className="text-links">Esqueceu a senha?</span></a>
          </div>


          <div className="flex mb-12">
            <Button
              label="Entrar"
              disabled={false}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
