import { Controller, UseGuards, Res, Get, Req, UseFilters, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { Users } from '../users/user.entity';
import { FtAuthGuard } from './guard/ft.guard';
import { ViewAuthFilter } from 'src/core/filter/unauth.filter';
import { ViewAuthGoogleFilter } from 'src/core/filter/unauthGoogle.filter';
import { GoogleAuthGuard } from './guard/google.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

	//로그인 창을 띄우는 메소드.
	@Get('google/login')
	@UseGuards(GoogleAuthGuard)
    @UseFilters(ViewAuthGoogleFilter)
	googleLogin() {
		return { msg : 'login ok'};
	}

	//로그인 후 받은 엑세스 토큰으로 jwt설정 및 응답하는 메소드.
	@Get('google/callback')
	@UseGuards(GoogleAuthGuard)
    @UseFilters(ViewAuthGoogleFilter)
	googleCallback(@Req() req: Request, @Res() res: Response,) {
        return this.responseWithJWT(req, res);
	}

	//42로그인 창을 띄우는 메소드.
	@Get('42/login')
	@UseGuards(FtAuthGuard)
    @UseFilters(ViewAuthFilter)
	login() {
		return { msg : 'login ok'};
	}

	//42로그인 후 받은 42엑세스 토큰으로 jwt설정 및 응답하는 메소드.
	@Get('42/callback')
	@UseGuards(FtAuthGuard)
    @UseFilters(ViewAuthFilter)
	callback(@Req() req: Request, @Res() res: Response,) {
        return this.responseWithJWT(req, res);
	}

	private responseWithJWT(req: Request, res: Response) {
		const user = req.user as Users;
		if (!user){
			return res.redirect('/auth/fa2');
		}
		const token = this.authService.createToken(user, false);
		res.cookie('p_login_jwt', token, { httpOnly: true });
		res.header('Authorization', 'JWT ' + token);
		res.redirect('/auth/fa2');
		return { token };
	}

	@Get('logout')
	logout(@Res() res) {
		res.clearCookie('p_login_jwt');
		res.json({ msg: 'logout ok' });
	}
}