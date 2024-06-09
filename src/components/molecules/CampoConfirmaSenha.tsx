import Label from '../atoms/Label';
import Input from '../atoms/Input';

function CampoConfirmaSenha({ onChange }: { onChange: (text: string) => void }) {
  return (
    <div>
      <Label texto="Confirmar Senha. " subtexto="repita a senha"/>
      <Input placeholder="digite aqui..." onChange={(event) => onChange(event.target.value)} type="password"/>
    </div>
  );
}

export default CampoConfirmaSenha;