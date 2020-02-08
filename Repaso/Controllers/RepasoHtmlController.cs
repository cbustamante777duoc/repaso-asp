using Repaso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Repaso.Controllers
{
    public class RepasoHtmlController : Controller
    {
        // GET: RepasoHtml
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Tabla()
        {
            return View();
        }

        public ActionResult ComboBox()
        {
            return View();
        }

        public ActionResult TablaJS()
        {
            return View();
        }


        //para mandar un lista es obligatorio el JsonResult
        public JsonResult listarPersonas()
        {
            List<Persona> listaPersona = new List<Persona>
            {
                new Persona {idPersona=1, nombre="Cristian", apellido="Bustamante" },
                new Persona {idPersona=2, nombre="Chanel", apellido="Shortcake" },
                new Persona {idPersona=3, nombre="Sadie ", apellido="Sink" }
            };
            return Json(listaPersona,JsonRequestBehavior.AllowGet);
        }

        public JsonResult llenarComboPersona()
        {
            List<Persona> listaPersona = new List<Persona>
            {
                new Persona {idPersona=1, nombre="Cristian"},
                new Persona {idPersona=2, nombre="Chanel" },
                new Persona {idPersona=3, nombre="Sadie " }
            };

            return Json(listaPersona, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ComboBoxJS()
        {

            return View();
        }
    }
}