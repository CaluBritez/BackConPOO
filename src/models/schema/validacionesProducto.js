import { check, validationResult } from 'express-validator';

export const validateProduct = [
    check('name')
        .optional() // No es obligatorio si allowNull es true
        .isString().withMessage('El nombre debe ser un texto'),
    check('description')
        .optional() // No es obligatorio si allowNull es true
        .isString().withMessage('La descripción debe ser un texto'),
    check('price')
        .notEmpty().withMessage('El precio es obligatorio')
        .isFloat({ gt: 0, lt: 10000 }).withMessage('El precio debe ser un número mayor a 0 y menor a 10,000'),
    check('category')
        .notEmpty().withMessage('La categoría es obligatoria')
        .isString().withMessage('La categoría debe ser un texto'),
    check('stock')
        .optional() // No es obligatorio si allowNull es true
        .isInt({ min: 0, max: 5000 }).withMessage('El stock debe ser un número entero entre 0 y 5000'),

    // Middleware para manejar los errores de validación
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
