


export function notFound(req, res, next) {
    res.status(404).json({ message: "Kaynak bulunamadı" });
}


export function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: "Sunucu hatası" });
}
