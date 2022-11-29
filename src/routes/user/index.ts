import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";
import { floor } from "lodash";
const router = Router();

// router.post('/signup', async (req, res) => {
//   try {
//     const findUser = await User.find({ email: req.body.email });
//     if (findUser.length > 0) {
//       res.json({ message: 'User already existed' });
//     } else {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);
//       const user = new User({
//         id: uuidv4(),
//         displayName: req.body.displayName,
//         email: req.body.email,
//         phoneNumber: req.body.phoneNumber,
//         password: hashedPassword,
//         avatar: req.body.avatar,
//         dob: req.body.dob,
//       });
//       const savedUser = await user.save();
//       if (savedUser) {
//         const key = process.env.JWT_KEY ?? '';
//         const expiredDate = floor(moment().add(7, 'days').valueOf() / 1000);
//         const token = await jwt.sign(
//           { exp: expiredDate, data: savedUser.id },
//           key
//         );
//         res.send({ accessToken: token, expiredDate });
//       }
//     }
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

export default router;
