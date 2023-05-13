import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {
  BoxContainer,
  RegisterForm,
  RegisterFormInput,
  RegisterTitle,
  ScreenContainer,
  RegisterFormLabel,
  RegisterFormBox,
  RegisterFormLabelBox,
  RegisterFormTextArea,
  RegisterFormButtton,
  RegisterFormMessageErrors,
} from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { http } from "../../utils/http-common";

type FormDataProps = {
  titulo: string;
  generos: string;
  ano: string;
  diretor: string;
  link: string;
  sinopse: string;
};

const schema = yup.object().shape({
  titulo: yup.string().required("O nome é obrigatório"),
  generos: yup.string().required("O gênero é obrigatório"),
  ano: yup
    .string()
    .required("O ano é obrigatório"),
  diretor: yup.string().required("O diretor é obrigatório"),
  link: yup.string().required("O link é obrigatório"),
  sinopse: yup.string().required("A sinopse é obrigatório"),
});

const RegisterMovieScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormDataProps) => {
    console.log(data);
    setIsLoading(true);
    try {
      const response = await http.post("/filme", data);
      console.log('retorno da api', response)
    } catch (error) {
      console.log('retorno da error', error)
    }finally {
      setIsLoading(false)
    }
  };

  return (
    <>
      <Header />
      <ScreenContainer>
        <BoxContainer>
          <RegisterTitle>Cadastre um filme</RegisterTitle>
          <RegisterForm onSubmit={handleSubmit(onSubmit)}>
            <RegisterFormLabel>Título</RegisterFormLabel>
            <Controller
              control={control}
              name="titulo"
              render={({ field: { value, onChange } }) => (
                <>
                  <RegisterFormInput value={value} onChange={onChange} />
                  {errors.titulo?.message && (
                    <RegisterFormMessageErrors>
                      {errors.titulo.message}
                    </RegisterFormMessageErrors>
                  )}
                </>
              )}
            />

            <RegisterFormBox>
              <RegisterFormLabelBox>
                <RegisterFormLabel>Gêneros</RegisterFormLabel>

                <Controller
                  control={control}
                  name="generos"
                  render={({ field: { value, onChange } }) => (
                    <>
                      <RegisterFormInput value={value} onChange={onChange} />
                      {errors.generos?.message && (
                        <RegisterFormMessageErrors>
                          {errors.generos.message}
                        </RegisterFormMessageErrors>
                      )}
                    </>
                  )}
                />
              </RegisterFormLabelBox>

              <RegisterFormLabelBox>
                <RegisterFormLabel>Ano</RegisterFormLabel>
                <Controller
                  control={control}
                  name="ano"
                  render={({ field: { value, onChange } }) => (
                    <>
                      <InputMask
                        mask="9999"
                        value={value}
                        onChange={onChange}
                        style={{ height: "40px" }}
                      ></InputMask>
                      {errors.ano?.message && (
                        <RegisterFormMessageErrors>
                          {errors.ano.message}
                        </RegisterFormMessageErrors>
                      )}
                    </>
                  )}
                />
              </RegisterFormLabelBox>

              <RegisterFormLabelBox>
                <RegisterFormLabel>Diretor</RegisterFormLabel>
                <Controller
                  control={control}
                  name="diretor"
                  render={({ field: { value, onChange } }) => (
                    <>
                      <RegisterFormInput value={value} onChange={onChange} />
                      {errors.diretor?.message && (
                        <RegisterFormMessageErrors>
                          {errors.diretor.message}
                        </RegisterFormMessageErrors>
                      )}
                    </>
                  )}
                />
              </RegisterFormLabelBox>
            </RegisterFormBox>
            <RegisterFormLabel>Link</RegisterFormLabel>
            <Controller
              control={control}
              name="link"
              render={({ field: { value, onChange } }) => (
                <>
                  <RegisterFormInput value={value} onChange={onChange} />
                  {errors.link?.message && (
                    <RegisterFormMessageErrors>
                      {errors.link.message}
                    </RegisterFormMessageErrors>
                  )}
                </>
              )}
            />
            <RegisterFormLabel>Sinopse</RegisterFormLabel>
            <Controller
              control={control}
              name="sinopse"
              render={({ field: { value, onChange } }) => (
                <>
                  <RegisterFormTextArea value={value} onChange={onChange} />
                  {errors.sinopse?.message && (
                    <RegisterFormMessageErrors>
                      {errors.sinopse.message}
                    </RegisterFormMessageErrors>
                  )}
                </>
              )}
            />
            { isLoading ?  <RegisterFormButtton disabled>SALVANDO...</RegisterFormButtton>  :  <RegisterFormButtton>CADASTRAR</RegisterFormButtton>}

          </RegisterForm>
        </BoxContainer>
      </ScreenContainer>
    </>
  );
};

export default RegisterMovieScreen;
