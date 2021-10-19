db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: true } });

db.produtos.find({}, { nome: true, curtidas: true, _id: false });
