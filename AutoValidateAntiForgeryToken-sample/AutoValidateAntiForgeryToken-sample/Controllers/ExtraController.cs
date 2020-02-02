using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AutoValidateAntiForgeryToken_sample.Controllers
{
    public class ExtraController : BaseController<ExtraController>
    {
        public ExtraController(ILogger<ExtraController> logger) : base(logger) { }
        
        [HttpPost("[Controller]/PostTest")]
        public IActionResult SimpleMethod()
        {
            return Ok();
        }
    }
}