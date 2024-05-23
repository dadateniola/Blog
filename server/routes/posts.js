import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: 'Api connected',
        error: ""
    });
})

export default router;