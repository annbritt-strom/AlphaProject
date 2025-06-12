using Microsoft.AspNetCore.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class ProjectsController : Controller
    {
        [Route("projects")]
        public IActionResult Index()
        {
            var viewModel = new ProjectsViewModel();
            return View(viewModel);
        }
    }
}
