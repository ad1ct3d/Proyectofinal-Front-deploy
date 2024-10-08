'use client';

import { useState, useContext } from 'react';
import { Button, Input, FormControl, FormLabel, Progress, Select, Box, Text, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Mail, Lock, User, Calendar, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { UserContext } from '@/context/user'; // Ajusta la ruta según la ubicación de tu contexto
import { useRouter } from 'next/navigation';

export default function InstaStayRegistro() {
  const router = useRouter();
  const { signUp, sendEmail } = useContext(UserContext); // Usamos el contexto para registrar usuarios y enviar correos

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '', // Asegúrate de tener este campo
    firstName: '',
    lastName: '',
    user_name: '',
    birthday: '',
    phone: '',
    address: '',
    country: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const userData = {
      user_name: formData.user_name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      firstName: formData.firstName,
      lastName: formData.lastName,
      birthday: formData.birthday,
      phone: formData.phone,
      address: formData.address,
      country: formData.country
    };

    try {
      await signUp(userData); // Llamada para registrar al usuario

      // Crea un objeto de datos para el envío de correo
      const emailData = {
        to: formData.email,
        subject: 'Bienvenido a InstaStay',
        message: 'Gracias por registrarte en InstaStay. ¡Estamos encantados de tenerte con nosotros!'
      };

      await sendEmail(emailData); // Llamada para enviar el correo
      router.push("/auth-signin");
      setError('');
    } catch {
      setError('Error al registrar usuario o enviar correo'); // Maneja errores de registro o envío de correo
    }
  };

  const calculateProgress = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(value => value !== '').length;
    return (filledFields / totalFields) * 100;
  };

  return (
    <Box className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Box className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-2xl transform transition-all hover:scale-105 duration-300">
        <Box>
          <Text fontSize="4xl" fontWeight="bold" textAlign="center" color="#4D8DA1" mb={6}>InstaStay</Text>
          <Text mt={6} textAlign="center" fontSize="3xl" fontWeight="extrabold" color="gray.900">
            Registro de Usuario
          </Text>
          <Box mt={4}>
            <Progress value={calculateProgress()} />
          </Box>
        </Box>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Box className="grid grid-cols-1 gap-6">
            {/* Campos existentes */}
            <FormControl>
              <FormLabel htmlFor="email" srOnly>Correo Electrónico</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Mail className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" srOnly>Contraseña</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Lock className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            {/* Campo de Confirmar Contraseña */}
            <FormControl>
              <FormLabel htmlFor="confirmPassword" srOnly>Confirmar Contraseña</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Lock className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Confirmar Contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="firstName" srOnly>Primer Nombre</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <User className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  placeholder="Primer Nombre"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName" srOnly>Apellido</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <User className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  placeholder="Apellido"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="user_name" srOnly>Nombre de Usuario</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <User className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="user_name"
                  name="user_name"
                  type="text"
                  autoComplete="user_name"
                  required
                  placeholder="Nombre de Usuario"
                  value={formData.user_name}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="birthday" srOnly>Fecha de Nacimiento</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Calendar className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="birthday"
                  name="birthday"
                  type="date"
                  required
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone" srOnly>Teléfono</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Phone className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="address" srOnly>Dirección</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MapPin className="text-gray-400" />
                </InputLeftElement>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  required
                  placeholder="Dirección"
                  value={formData.address}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="country" srOnly>País</FormLabel>
              <InputGroup>
              <Select
  id="country"
  name="country"
  required
  value={formData.country}
  onChange={handleChange}
>
  <option value="">Selecciona un País</option>
  <option value="AR">Argentina</option>
  <option value="BO">Bolivia</option>
  <option value="BR">Brasil</option>
  <option value="CL">Chile</option>
  <option value="CO">Colombia</option>
  <option value="CR">Costa Rica</option>
  <option value="CU">Cuba</option>
  <option value="DO">República Dominicana</option>
  <option value="EC">Ecuador</option>
  <option value="SV">El Salvador</option>
  <option value="GT">Guatemala</option>
  <option value="HN">Honduras</option>
  <option value="MX">México</option>
  <option value="NI">Nicaragua</option>
  <option value="PA">Panamá</option>
  <option value="PY">Paraguay</option>
  <option value="PE">Perú</option>
  <option value="UY">Uruguay</option>
  <option value="VE">Venezuela</option>
  <option value="US">Estados Unidos</option>
  <option value="ES">España</option>
  <option value="FR">Francia</option>
  <option value="IT">Italia</option>
  <option value="GB">Reino Unido</option>
  <option value="JP">Japón</option>
  <option value="CN">China</option>
  <option value="IN">India</option>
  <option value="AU">Australia</option>
  <option value="BR">Brasil</option>
  <option value="ZA">Sudáfrica</option>
</Select>

              </InputGroup>
            </FormControl>
          </Box>
          {error && <Text color="red.500">{error}</Text>}
          <Button
            type="submit"
            w="full"
            colorScheme="teal"
            size="lg"
          >
            Registrarse
          </Button>
          <Text align="center">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/auth-signin" className="text-teal-500">Inicia sesión</Link>
          </Text>
        </form>
      </Box>
    </Box>
  );
}
