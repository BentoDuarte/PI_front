import Slw from "sweetalert2";
import Swal from "sweetalert2";

export default async function Alert(tipo, mensagem, tempo, titulo, textButton, posicao, width) {
  if (tipo == "Erro") {
    return await Slw.fire({
      title: titulo || "Erro",
      html: mensagem.replace(/\n/g, "<br>") || mensagem,
      icon: "error",
      iconColor: "red",
      confirmButtonColor: "#3085d6",
      confirmButtonText: textButton || "Confirmar",
    });
  } else if (tipo == "Erro2") {
    return await Slw.fire({
      title: titulo || "Erro",
      html: mensagem.replace(/\n/g, "<br>"),
      icon: "error",
      iconColor: "red",
      showConfirmButton: false,
      timer: tempo || 2500,
      timerProgressBar: true,
      customClass: {
        popup: "alert-scrollable",
      },
    });
  } else if (tipo == "Alert") {
    return await Slw.fire({
      title: titulo || "Atenção",
      html: `${mensagem}`, 
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#ff735c",
      iconColor: "#ff735c",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Confirmar",
    });
  } else if (tipo == "Alert2") {
    return await Slw.fire({
      title: "Atenção",
      text: `${mensagem}`,
      icon: "warning",
      iconColor: "#ff735c",
      showConfirmButton: false,
      timer: tempo || 2000,
      timerProgressBar: true,
    });
  } else if (tipo == "Sucesso") {
    return await Slw.fire({
      title: "Sucesso",
      text: `${mensagem}`,
      icon: "success",
      iconColor: "#81D75F",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Confirmar",
    });
  } else if (tipo == "Sucesso2") {
    return await Slw.fire({
      title: "Sucesso",
      text: `${mensagem}`,
      icon: "success",
      iconColor: "#81D75F",
      showConfirmButton: false,
      timer: tempo || 2500,
      timerProgressBar: true,
    });
  } else if (tipo == "Info") {
    return await Slw.fire({
      title: titulo || "Informação",
      text: `${mensagem}`,
      icon: "info",
      // iconColor: "#ffae00",
      showCancelButton: false,
      confirmButtonColor: "#3fc3ee",
      confirmButtonText: "OK",
    });
  } else if (tipo == "Sucesso-popup") {
    return await Swal.fire({
      toast: true,
      position: posicao || "top",
      html: `${mensagem}`,
      icon: "success",
      width: width || "800px" || "fit-content",
      iconColor: "#81D75f",
      showConfirmButton: false,
      timer: tempo || 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  } else if (tipo == "Alert-popup") {
    return await Slw.fire({
      toast: true,
      position: posicao || "top",
      html: `${mensagem}`,
      icon: "info",
      width: "fit-content",
      iconColor: "#ffae00",
      showConfirmButton: false,
      timer: tempo || 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  } else if (tipo == "Erro-popup") {
    return await Slw.fire({
      toast: true,
      position: posicao || "top",
      html: `${mensagem}`,
      icon: "error",
      width: "fit-content",
      iconColor: "#ff735c",
      showConfirmButton: false,
      timer: tempo || 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  }
}
