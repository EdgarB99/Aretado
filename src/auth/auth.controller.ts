import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  createUsuario(@Body() usuario: CreateAuthDto) {
    return this.authService.createUsuario(usuario);
  }

  @Post('login')
  loginUsuario(@Body() usuarioLogin: LoginUsuarioDto) {
    return this.authService.loginUsuario(usuarioLogin);
  }

  @Get()
  findAllUsuarios() {
    return this.authService.findAllUsuarios();
  }

  @Get(':id')
  findOneUsuario(@Param('id') id: string) {
    return this.authService.findUsuarioById(id);
  }

  @Patch(':id')
  updateUsuario(@Param('id') id: string, @Body() usuario: UpdateAuthDto) {
    return this.authService.updateUsuario(id, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
